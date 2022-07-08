import React from 'react'

const MobileCard = ({mobileData}) => {
    // const filterCarrier =[...new Set( mobileData.map((currElem) => {
    //     return currElem.carrier;
    // }))]
    // console.log(filterCarrier)

  return (
    <>
    <section className="main-container">
       {mobileData.map((currElem) => {
        const {age, id,imageUrl,name,snippet} = currElem;

        return(
            <>

            <div className="card-container" key={age}>
                <div className="card">
                    <img src={imageUrl} alt={name} className="image"/>
                    <div className="nameBox">
                        <h1 className="title">{name}</h1>
                        <span className="tagname">{id}</span>
                    </div>
                    <p className='description'>{snippet}</p>

                </div>

            </div>
            
            </>
        )


       })}
        
        
    </section>
    </>
    
  )
}

export default MobileCard