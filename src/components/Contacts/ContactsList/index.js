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
            subscriberName: 'Oleg',
            subscriberLastName: "Jeremy",
            subscriberPhoneNumber: '+30685418616',
        },
        {
            subscriberName: 'Roman',
            subscriberLastName: "Dowe",
            subscriberPhoneNumber: '+30685418616',
        },
        {
            subscriberName: 'Viki',
            subscriberLastName: "Stalibam",
            subscriberPhoneNumber: '+30685418616',
        },
        {
            subscriberName: 'Oliver',
            subscriberLastName: "Fridux",
            subscriberPhoneNumber: '+30685418616',
        },
    ];
    return (
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={data}

        renderItem={item => (
            <List.Item actions={[
                <Button key="contact-list-edit" type="primary">Edit contact</Button>,
                <Button key="contact-list-delete" type="default" danger>Delete contact</Button>,
            ]}>

                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                    title={ ` ${item.subscriberName} ${item.subscriberLastName} ` }
                    description={item.subscriberPhoneNumber}
                />
          
          </List.Item>
        )}
      />
    );
  }
};
export default ContactsList;