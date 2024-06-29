# AirBnb Clone
## Introduction
It's a simpler clone of the AirBnb website, rendered with React. 
## Concepts learned in the course
 - #### React Syntax
   - <details>
       <summary>If you want to write Javascript syntax inside JSX syntax, you can use keys "{}" and write the Javascript code inside.</summary>
     
      ```JSX
      // App.jsx
      export default function App(){
        const imgSource = "../assets/image.png"
        return (<img src={ imgSource }></img>)
      }
      ```
     </details>  
 - #### Props
   - You can pass values to the React components, the same logic as passing arguments to your functions
   - <details>
       <summary>To pass "arguments", you have to write them like you write html attributes</summary>
     
      ```JSX
      // App.jsx
      export default function App(){
        return (<main variable1="value1" variable2="value2"></main>)
      }
      ```
     </details>
   - <details>
       <summary>Those arguments will be stored inside an object, to access that object you have to define a parameter for the React Component</summary>
     
      ```JSX
      // App.jsx
      export default function App(){
        return (<main variable1="value1" variable2="value2"></main>)
      }
      // Main.jsx
      export default function Main(props){
        console.log(props.variable1, props.variable2)
        const {variable1, variable2} = props
        // You can also deconstruct the parameter inside the parenthesis.
      }
      ```
     </details>
    - <details>
       <summary>If you have a lot of variables to pass, you can pass them inside an object, or use the spread operator instead.</summary>
     
      ```JSX
        // App.jsx
        export default function App(){
          const object = {
            variable1: 23,
            variable2: 54
          }
          return (<main objectContainer= { object } ></main>)
        }
        // Main.jsx
        export default function Main(props){
          console.log(props.objectContainer.variable1, props.objectContainer.variable2)
        }
      // ----------- Or -----------
        // App.jsx
        export default function App(){
          const object = {
            variable1: 23,
            variable2: 54
          }
          return (<main {...object} ></main>)
        }
        // Main.jsx
        export default function Main(props){
          console.log(props.variable1, props.variable2)
        }
      ```
     </details>
 - #### Using .map() to render multiple components
   - <details>
       <summary>You can make a cleaner code, save time, and increase the adaptability using .map() when you have to render multiple instances of the same React Component.</summary>
     
      ```JSX
      // App.jsx
      const data = [
        {value: "value 1"},
        {value: "value 2"},
        {value: "value 3"},
      ]

      // Without .map()
      export default function App(){
        return (
          <main>
            <DataItem {...data[0]}/>
            <DataItem {...data[1]}/>
            <DataItem {...data[2]}/>
          </main>)
      // With .map()
      export default function App(){
        return (
          <main>
            { data.map( item => <DataItem {...item}/>) }
          </main>)
      }


      ```
     </details>  
## Preview
![react-info-site](https://github.com/AlexMakowiecki/react-info-site/assets/122258496/5e76b814-ca11-4d98-8271-54feb9c180b2)


## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀
