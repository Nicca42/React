# Notes from each lesson (to be turned into better notes)

# L7

App component -> Holds everything 

### Props
> Props are variables that *components* need in order to render

State is where the data lives
Props is how the data gets where it needs to go

Prop data passing

```
<Header tagline="only strings" age={400} />
```
Everything other than a string goes in `{}`.

Referencing the tag

```
<span>{this.props.tagline}</span>
```
* The `{}` informs the JSX (the component HTML like stuff) that we are switching to JavaScript.
* The `this` refers to the instance (could have multiple `Header` instances with different props).
* `props` is referring to the props object passed in.
* `tagline` refers to an object within the `props`.

`$0` console it to return what you have selected 
`$1` is the second last thing you clicked and so on

`$r` console it and it will print the selected container instance (object).

# L8
