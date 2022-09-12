function ResponseMessage(props) {
  return (
    <div className={"alert alert-" + props.tag} role="alert">
      {props.message}
    </div>
  );
}

export default ResponseMessage;
