// Boo who

// First method:
function booWho(bool) {
    return (
        bool === true || bool === false ? true : false
    );
}

console.log(booWho(null));

// Second method:
function booWho(bool) {
    if (bool === true || bool === false) return true;
    return false;
}

console.log(booWho(null));