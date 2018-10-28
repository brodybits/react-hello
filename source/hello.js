const helloFactory = function ({ React }) {
  const {
    string,
    func
  } = React.PropTypes;

  return function Hello (props) {

    // React wants propTypes & defaultProps
    // to be static.
    Hello.propTypes = {
      word: string,
      mode: string,

      actions: React.PropTypes.shape({
        setWord: func.isRequired,
        setMode: func.isRequired
      })
    };

    const wordInput = React.createRef();

    // TODO: define this as a const and then do return self
    // at the end.
    let self;

    return self = {

      props, // set props


      componentDidUpdate () {
        wordInput.getDOMNode().focus();
      },

      render () {
        const {
          word,
          mode
        } = self.props;

        const {
          setMode,
          setWord
        } = self.props.actions;

        const styles = {
          displayMode: {
            display: (mode === 'display') ? 'inline' : 'none'
          },

          editMode: {
            display: (mode === 'edit') ? 'inline' : 'none'
          }
        };

        const onKeyUp = function (e) {
          if (e.key !== 'Enter') return;

          setWord(e.target.value);
          setMode('display');
        };

        return (
          <p>Hello,&nbsp;
            <span
              style = { styles.displayMode }
              onClick = { () => setMode('edit') }
              >{ word }!</span>
            <input
              ref = {wordInput}
              style = { styles.editMode }
              placeholder = { word }
              onKeyUp = { onKeyUp } />
          </p>
        );
      }
    };

  };

};

export default helloFactory;
