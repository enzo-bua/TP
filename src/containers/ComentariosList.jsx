import '../styles/Comentarios.css'
const ComentariosList = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export default ComentariosList