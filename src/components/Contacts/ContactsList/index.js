import React from 'react';
import { List, Avatar, Button } from 'antd';



class ContactsList extends React.Component {
//   state = {
//     initLoading: true,
//     loading: false,
//     data: [],
//     list: [],
//   };

//   componentDidMount() {
//     this.getData(res => {
//       this.setState({
//         initLoading: false,
//         data: res.results,
//         list: res.results,
//       });
//     });
//   }

  render() {
    // const { list } = this.state;
    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
    ];
    return (
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={data}

        renderItem={item => (
            <List.Item actions={[
                <a key="list-loadmore-edit">edit</a>, 
                <a key="list-loadmore-more">more</a>
            ]}>
                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background   applications, is refined by Ant UED Team"
                />
          
          </List.Item>
        )}
      />
    );
  }
};
export default ContactsList;