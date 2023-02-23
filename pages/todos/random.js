export async function getStaticProps() {
  const randomId = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
      .then(response => response.json())
      .then(json => json)

  return {
    props: {
      randomTodo: res
    },
    revalidate: 10
  }
}


export default function Random({randomTodo}) {
  return (
    <div>
      <div>Id: {randomTodo.id}</div>
      <div>Title: {randomTodo.title}</div>
    </div>
  )
}
