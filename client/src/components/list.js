import React, { useEffect, useState } from 'react'
import { GET_ANIMALS, GET_ANIMAL_NAME } from '../graphql/queries'
import CardList from './cardList'
import { useQuery, useLazyQuery } from '@apollo/client';
import Header from './header'

const AnimalList = () => {

    const [edited, setEdited] = useState(0)
    const [info, setInfo] = useState([])

    function handle(value) {
        getAnimals()
        setEdited(3)
    }

    // const { loading, error, data } = useQuery(GET_ANIMALS)
    // if (loading) return 'Loading...'
    // else if (error) return `Error! ${error.message}`

    const [getAnimals, { loading, data }] = useLazyQuery(GET_ANIMALS);

    if (loading) return <p>Loading ...</p>
    if (data && data.Animals) {
        //console.log(data.Animals)
    }

    // getAnimals()

    return (
        <div>



            <Header callback={handle} />
            {
                edited !== 0 && data && data.Animals && <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '10px' }}>
                    {
                        data.Animals.map(item => {
                            return <CardList id={item.id} name={item.name} food={item.food} type={item.type} characterstic={item.properties.type} legs={item.properties.legs} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default AnimalList