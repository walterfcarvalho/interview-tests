import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Resume } from '../Resume'
import './RenderRobots.css'

const RenderRobots = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [robots, setRobots] = useState([])

  const onSubmit = data => {
    let aux = [...robots]
    aux.push({ url: "https://robohash.org/".concat(data.name), id: data.name })
    setRobots(aux)
  }

  watch()

  function removeItem(event) {
    let id = (event.target.id)

    let aux = [...robots]
    aux = aux.filter((robo) => robo.id !== (id))

    setRobots(aux)
  }

  return <div>
    <Resume infoName={"RenderRobots"}/>

    <form onSubmit={handleSubmit(onSubmit)} >

      <p>
        <input
          placeholder="Robot name..."
          {...register('name', {
            required: 'Robot name is required',
            maxLength: {
              value: 200,
              message: 'Max length is 2',
            },
          })}
        />
        {errors.firstName && errors.firstName.message}
        <input type="submit" value={"go"} />
      </p>

    </form>

      <div className="robos-container">
      <p className="robots-p">Robots</p>
      <div className="robos-list">
        {robots.map((robot, idx) => (
          <img key={idx} id={robot.id} className="robot-image" src={robot.url} onClick={removeItem} alt={`Url do robot:${robot.url}`} />
        ))}
      </div>
    </div>

  </div>
}

export default RenderRobots