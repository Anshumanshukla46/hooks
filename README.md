# React provides several built-in hooks that can help you manage state and performance in your functional components. Here's a brief overview of four popular hooks: useContext, useRef, useCallback, and useMemo.

## useContext: 
This hook allows you to access context data from any component in your app, without having to pass it down as props. You can use it to simplify your code and make it more maintainable by separating concerns and avoiding "prop drilling."

## useRef: 
This hook provides a way to store a mutable value that persists between renders, without causing the component to re-render. You can use it to access the DOM node of a component, or to keep track of some other value that you don't want to trigger a re-render


## useCallback: 
This hook returns a memoized version of a callback function, which means it only changes when its dependencies change. You can use it to optimize performance by preventing unnecessary re-renders of child components that rely on a callback function. Here's an example:


## useMemo: 
This hook allows you to memoize a value, which means it only gets re-computed when its dependencies change. You can use it to optimize performance by avoiding expensive calculations that don't need to be re-run on every render


# CHECKOUT THE EXAMPLE IN SEPARATE FOLDER INSIDE SRC
