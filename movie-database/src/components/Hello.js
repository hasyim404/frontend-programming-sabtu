/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */

const Hello = (props) => {
  // Melakukan destructing props (object)
  // const { name } = props;
  // const { jurusan } = props;

  return (
    <div className="hello">
      <h2>Nama saya {props.name}</h2>
      <p>Saya dari jurusan {props.jurusan}</p>
    </div>
  );
};

export default Hello;
