import "./style.css";
import {
    soundsGroup,
    soundsName,
} from "./static.js";

const KeyboardKey = ({ power, play, sound: { keyCode, key, id, url }, index }) => {
    const handleKeydown = (e) => {
        if (e.keyCode === keyCode) {
            play(key, id);
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
    }, []);

    return (
        <button
            className="drum-pad"
            onClick={() => play(key, id)}
            id={index}
        >
            {power && (
                <audio className="clip" id={key} src={url} />
            )}
            {key}
        </button>
    )
};

const Keys = ({ power, play, sounds }) => (
    <div className="keyboard">
        {sounds.map((sound, i) => (
            <KeyboardKey
                power={power}
                play={play}
                sound={sound}
                index={i}
                key={i}
            />
        ))}
    </div>
);

const DrumControl = ({ drumPower, power, volume, handleVolumeChange, name, changeSoundsGroup }) => (
    <div className="control">
        <button onClick={drumPower}>
            Turn Drum {power ? "OFF" : "ON"}
        </button>
        <h2>
            Volume: {Math.round(volume * 100)}%
        </h2>
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
        />
        <h2 id="display">
            {name}
        </h2>
        <button onClick={changeSoundsGroup}>
            Change Sounds
        </button>
    </div>
);

const App = () => {
    const [soundType, setSoundType] = React.useState("heaterKit");
    const [sounds, setSounds] = React.useState(soundsGroup[soundType]);
    const [soundName, setSoundName] = React.useState("");
    const [volume, setVolume] = React.useState(1);
    const [power, setPower] = React.useState(true);

    const drumPower = () => {
        setPower(prev => !prev);
    };
    const handleVolumeChange = (e) => {
        setVolume(e.target.value)
    };
    const play = (key, sound) => {
        const audio = document.getElementById(key);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch((error) => {
                console.error("Ignore this error: 'Error playing audio'");
            });
            setSoundName(sound);
        }
    };
    const changeSoundsGroup = () => {
        setSoundName("");
        if (soundType === "heaterKit") {
            setSoundType("smoothPianoKit")
            setSounds(soundsGroup.smoothPianoKit);
        }
        else {
            setSoundType("heaterKit");
            setSounds(soundsGroup.heaterKit);
        }
    };
    const setKeyVolume = () => {
        const audios = sounds.map(sound => document.getElementById(sound.key));
        audios.forEach(audio => {
            if (audio) {
                audio.volume = volume;
            }
        });
    };

    return (
        <div id="drum-machine">
            <div className="wrapper">
                <Keys
                    power={power}
                    play={play}
                    sounds={sounds}
                />
                <DrumControl
                    drumPower={drumPower}
                    power={power}
                    volume={volume}
                    handleVolumeChange={handleVolumeChange}
                    name={soundName || soundsName[soundType]}
                    changeSoundsGroup={changeSoundsGroup}
                />
                {setKeyVolume()}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));