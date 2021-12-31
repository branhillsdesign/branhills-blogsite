const CustomCode = (props) => {
  return <code style={{ backgroundColor: 'lightblue' }} {...props} />;
};

const MDXStyles = {
  p: (props) => <p style={{ fontSize: '25px' }} {...props} />,
  inlineCode: CustomCode,
};

export default MDXStyles;
