import Paragraph from 'antd/lib/skeleton/Paragraph'
import React, { useState } from 'react'

const CardList = ({ id, name, food, type, characterstic, legs }) => {

    const styles = getStyles();

    const Paragraph = ({ value }) => {
        return <span style={styles.textBold} >{value}</span>
    }

    const Title = ({ value }) => {
        return <span style={styles.colorGrey} >{value}</span>
    }

    return (
        <div>
            <h2>{name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                <Title value={"id:"} /> <Paragraph value={id} />
                <Title value={"food:  "} /> <Paragraph value={food} />
                <Title value={"type:  "} /> <Paragraph value={type} />
                <Title value={"legs:  "} /> <Paragraph value={legs} />
                <Title value={"characterstics: "} /> <Paragraph value={characterstic} />
            </div>
            <hr style={{width:'100%'}}></hr>
        </div>
    )
}

const getStyles = () => ({
    textBold: {
        fontWeight: "bold"
    },
    colorGrey: {
        color: 'grey'
    }
})


export default CardList