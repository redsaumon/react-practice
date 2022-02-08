import { Component } from 'react/cjs/react.production.min';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
        if (newProps.data === this.props.data){
            return false;
        }
        return true;
    }
    render() {
        console.log('TOC');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={'/content/' + data[i].id}
                        data-id={data[i].id}
                        onClick={function(id, e) {
                            e.preventDefault();
                            this.props.onChangePage(id);
                        }.bind(this, data[i].id)}
                    > {data[i].title}</a>
                </li>);
            i = i + 1;
        }
      return (
        <nav>
          <h2>{lists}</h2>
        </nav>
      );
    }
  }

  export default TOC; 