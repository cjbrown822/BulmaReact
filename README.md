### Bulma-React
###### Opensource encapsulation of the [Bulma](https://bulma.io) Framework.
[![BCH compliance](https://bettercodehub.com/edge/badge/cjbrown822/bulma-react?branch=master)](https://bettercodehub.com/)

```javascript
npm install @cjbrown822/bulma-react -S
```

In your code add

```jsx harmony
import React from "react";
import Bulma from "bulma-react";

//Sample column
const App = props => {
    return (
        <Bulma.Columns>
            <Bluma.Column columnSizeModifier={[{size: Constants.Columns.Sizes.OneQuarter}]}>
                left content here
            </Bluma.Column>
            <Bluma.Column>
                right content here
            </Bluma.Column>
        </Bulma.Columns>
    )
};
```
