# Add Key-Value Pairs to JavaScript Objects

At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example:

```
const tekkenCharacter = {
player: 'Hwoarang',
fightingStyle: 'Tae Kwon Doe',
human: true
};
```

The above code defines a Tekken video game character object called tekkenCharacter. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:

```
tekkenCharacter.origin = 'South Korea';
```

This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

```
tekkenCharacter['hair color'] = 'dyed orange';
```

Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:

```
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

After adding all the examples, the object will look like this:

```
{
player: 'Hwoarang',
fightingStyle: 'Tae Kwon Doe',
human: true,
origin: 'South Korea',
'hair color': 'dyed orange',
'eye color': 'brown'
};
```
