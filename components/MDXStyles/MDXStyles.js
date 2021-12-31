const CustomCode = (props) => {
  return <code style={{ backgroundColor: '#000000' }} {...props} />;
};

const MDXStyles = {
  p: (props) => <p style={{ fontSize: '16px' }} {...props} />,
  inlineCode: CustomCode,
};

export default MDXStyles;
