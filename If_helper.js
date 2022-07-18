export function If(props) {
    if (!!props.condition) {
        return props.children;
    }
    return null;
}

function App() {
    return <If condition = {true}> Goku is the best</If>
}