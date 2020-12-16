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

### Stateless Functional Component
> A component that does not have any functions, and only has a `render()` and Prop types can be simplified into a stateless functional component.

You can have "smart" components (have functions i.e manipulate the data etc) and stateless functional components. 

If a function only has a render method and `Prop types` then it is un-needed for the component to be a full react component, but instead make it a stateless functional component.

You change the component like so:
```
// currently your component is a `React.component`
class Header extends React.Component {
    // But it doesn't need to be as it does nothing
    // So we turn it into a function
}

function Header() {
    // Now that it's not a component any more
    // it wont have an instance (a `this`).
    // So you will need to pass in the props
}

function Header(props) {
    return (
        // Then where the data is being rendered remove this
        <span>{props.tagline}</span>
        // Then we can make this even more neat
        // (not necessarily beneficial, but is standard)
    )
}

const Header = (props) => (
    // The arrow function actually indicates the return
    // so we can remove it by changing the `{}`'s of the function
    // to the `()`'s of the return statement and the 
    // function will return the JSX
);

// You can also extrapolate the specific variables and then you
// don't even need to go `props.tagline`
const Header = ({ tagline }) => (
    <span>{tagline}</span>
)
```

# L9

### Routing 

Everything is a component, even the Router. 

```
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route>
                
            </Route>
        </Switch>
    </BrowserRouter>
)
```
The way the switch works is it will first try the first `<Route>` and if that doesn't work it will try the next one etc. 

For the landing page the rout needs to look like such:
```
<Route exact path="/" component={StorePicker}/>
```
The `exact path` lets the router know this needs to be on the base, the `/`. 
Then we choose what component to render with the component tag (remember to import the component).

The `Router` component itself needs to be rendered in the `index.js`

Important router examples
```
    // The landing page
<Route exact path="/" component={StorePicker} />
    // A page that has different variations depending on `storeId`
<Route path="/store/:storeId" component={App} />
    // A catch all if there is no path to requested page
<Route component={NotFound} />
```

# L10