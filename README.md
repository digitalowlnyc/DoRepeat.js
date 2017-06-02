# DoRepeat.js
A small Javascript library to repeat a given function call a certain number of times, with wait time in between

# Usage
1) Include DoRepeat.js with a script tag, for example `<script src='DoRepeat.js'>`
2) Use `DoRepeat.schedule` as shown below

# Usage Example

```Javascript
  // First argument = The function you want to repeat
  // Second argument = Delay between calls, in milliseconds
  // Third argument = Number of times to call the function
  // Fourth argument = Whether the first call should wait (false means call it immediately)

  DoRepeat.schedule(function() {
        console.log('Hello world!');
    }, 5000, 3, false);
```
