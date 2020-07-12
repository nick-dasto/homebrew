import React, {useContext} from 'react'
import Entry from "./Entry";
import Form from "./Form";
import { BrewContext } from "../context/BrewContext";


function Body() {
    const {create, brew} = useContext(BrewContext)
    return (
        <>
        {create ? (
        <Form />
      ) : (
        <div className="entry-container">
          {brew.map((b) => (
            <Entry key={b.generalInfo.name} b={b} />
          ))}
        </div>
      )}
        </>
    )
}

export default Body
