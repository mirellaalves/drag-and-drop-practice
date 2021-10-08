const Shape = (id, name, img) => {
  return (
    <li>
      <img src={img} alt={`${name} shape`} width='20px' />
      <span>{name}</span>
    </li>
  );
};

export default Shape;
