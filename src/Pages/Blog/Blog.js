import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='QnA w-1/2 mx-auto'>

                {/* Question No 1 Answer */}
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 1</h3>
                        <h3 className="card-subtitle mb-2 text-muted">How will you improve the performance of a React Application?</h3>
                        <p className="card-text"> According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues. </p>
                    </div>
                </div>

                {/* Question No 2 Answer */}
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 2</h3>
                        <h4 className="card-subtitle mb-2 text-muted">What are the different ways to manage a state in a React application?</h4>
                        <p className="card-text">
                        It's important to mention that not all components in a React app must have state. There are stateless components as well which just render its content without the need to store any information, and that's just fine.

Another important thing to mention is that state change is one of the two things that make a React component re-render (the other is a change in props). In this way, the state stores information about the component and also controls its behavior.</p>
                    </div>
                </div>
                {/* Question No 2 Answer */}
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 3</h3>
                        <h4 className="card-subtitle mb-2 text-muted">How does prototypical inheritance work?</h4>
                        <p className="card-text">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        </p>
                    </div>
                </div>
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 4</h3>
                        <h4 className="card-subtitle mb-2 text-muted">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                        <p className="card-text">
                        useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.
                        </p>
                    </div>
                </div>
                <div className='card mx-auto mb-4'>
                    <div className="card-body">
                        <h3 className="card-title">Question No 6</h3>
                        <h4 className="card-subtitle mb-2 text-muted">What is a unit test? Why should write unit tests?</h4>
                        <p className="card-text">
                        Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;