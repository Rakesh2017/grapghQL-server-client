import { ADD_ANIMAL } from '../graphql/queries'
import React from 'react'
import { useMutation } from '@apollo/client';

const Header = ({callback}) => {

    const [addAnimal, { data }] = useMutation(ADD_ANIMAL);


    function func() {
        addAnimal({ variables: { name:"cheeta",  type:"animal"} });
        callback(4)
        console.log(data)
    }

    return (
        <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex' }}>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="type" />
            </div>
            <button onClick={func} style={{ width: '100%', marginTop: '10px' }}>
                Add Animal
            </button>
        </div>
    );
}

export default Header