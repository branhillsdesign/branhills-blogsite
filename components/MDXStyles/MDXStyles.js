const CustomCode = (props) => {
  return (
    <>
      <pre
        style={{
          borderRadius: '0.5rem',
          border: '2px solid #000000',
          overflowX: 'scroll',
          padding: '0.5rem',
        }}
      />
      <code
        style={{
          fontSize: '0.8rem',
          color: '#ffffff',
        }}
      ></code>
    </>
  );
};

const MDXStyles = {
  p: (props) => <p style={{ fontSize: '18px' }} {...props} />,
  pre: (props) => <CustomCode {...props} />,
  code: (props) => <CustomCode {...props} />,
};

export default MDXStyles;
