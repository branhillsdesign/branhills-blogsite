const CustomCode = (props) => {
  return (
    <code
      style={{
        margin: '0.5em 0',
        padding: '0.5em',
        lineHeight: '2.0em',
        fontSize: '1.2em',
        fontWeight: 'bold',
      }}
      {...props}
    />
  );
};

const MDXStyles = {
  p: (props) => <p style={{ fontSize: '16px' }} {...props} />,
  pre: (props) => <CustomCode {...props} />,
  code: (props) => <CustomCode {...props} />,
};

export default MDXStyles;
