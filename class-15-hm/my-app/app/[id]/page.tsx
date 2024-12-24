const todosID = async (props: any) => {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${props.params.id}`
  );
  const res = await url.json();  
  return <div className="text-3xl text-center">{res.title}&nbsp;&nbsp;{res.id}</div>;
};

export default todosID;
