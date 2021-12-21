const renderOptions = (options) => {
  const data = [];
  data.push(
    <option value="" key="1">
      -- Select Options --
    </option>
  );

  for (const item of options) {
    data.push(
      <option
        value={item._id}
        key={item._id}
      >{`${item.mso} - ${item.ten}`}</option>
    );
  }

  return data;
};

export { renderOptions };
