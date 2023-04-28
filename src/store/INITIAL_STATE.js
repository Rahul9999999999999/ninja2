import NOTIFICATION_TYPES from './NOTIFICATION_TYPES';

export const SEED_CONVERSATIONS = [
  {
    conversationId: 1,
    conversationName: 'React Redux',
    users: [1, 2, 3, 5],
    messages: [
      {
        message:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 1,
        modifyingUser: 2,
        timestamp: 1667752889000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 2,
        timestamp: 1667752991158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebneel.com%2Fnature-photography-photos&psig=AOvVaw104Ov2lq_fioWzCzFlv4DZ&ust=1682096286765000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjB_5X3uP4CFQAAAAAdAAAAABAJ',
        sender: 2,
        timestamp: 1668840536000,
      },
    ],
  },
  {
    conversationId: 2,
    conversationName: 'Youth Club',
    users: [1, 2],
    messages: [
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://i.pinimg.com/474x/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5--tunnels-solitude.jpg',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        message:
          'Pukeop',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 3,
        timestamp: 1667752786158,
      },
    ],
  },
  {
    conversationId: 3,
    conversationName: 'Theri',
    users: [1, 2],
    messages: [
      {
        message: 'Ko',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 3,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsVX1UfmH6YdY-cMehl8i5B709wLfKGcRtpl8s77eUA&s',
        sender: 1,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
    ],
  },
  {
    conversationId: 4,
    conversationName: 'Zesky',
    users: [1, 2],
    messages: [
      {
        message: 'message text',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 3,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?b=1&s=170667a&w=0&k=20&c=MBaQEp6lxIWgZV0eFqQ8d2_zDbYuFk5LEFBawDinLhw=',
        sender: 3,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
    ],
  },
  {
    conversationId: 5,
    conversationName: 'Walker',
    users: [1, 2],
    messages: [
      {
        message: 'message text',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 3,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 1,
        modifyingUser: 2,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
        sender: 2,
        timestamp: 1667752793158,
      },
    ],
  },
  {
    conversationId: 6,
    conversationName: 'Brocolli',
    users: [1, 2],
    messages: [
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        message:
          'I ko on op',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
    ],
  },
  {
    conversationId: 7,
    conversationName: 'Agency',
    users: [1, 4],
    messages: [
      {
        message: 'Beauty and Beast',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 2,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sender: 1,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 4,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
    ],
  },
  {
    conversationId: 8,
    conversationName: 'Seo',
    users: [2, 4],
    messages: [
      {
        message: 'message ko',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 4,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sender: 4,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 1,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
    ],
  },
  {
    conversationId: 9,
    conversationName: 'Thurra',
    users: [1, 2, 3],
    messages: [
      {
        message:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 4,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 4,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sender: 2,
        timestamp: 1667752793158,
      },
    ],
  },
  {
    conversationId: 10,
    conversationName: 'Ux Design',
    users: [1, 2],
    messages: [
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 3,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 3,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2240000/pexels-photo-2240000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sender: 1,
        timestamp: 1667752793158,
      },
      {
        message:
          'Quite a a very loong message. Who knows what all I need to type here. i hope it exceeds a line and still is properly formatted in sidepanel.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 2,
        timestamp: 1667752786158,
      },
    ],
  },
  {
    conversationId: 11,
    conversationName: 'Java',
    users: [4, 2],
    messages: [
      {
        message: 'A long message text goes here',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 1,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?auto=compress&cs=tinysrgb&w=600',
        sender: 4,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 4,
        timestamp: 1667752789000,
      },
    ],
  },
  {
    conversationId: 12,
    conversationName: 'Best Coding',
    users: [4, 2],
    messages: [
      {
        message: 'message text',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 4,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 1,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
    ],
  },
];

export const SEED_USERS = [
  {
    userId: 1,
    userName: 'Rahul Shit',
    imgUrl:
      'https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    userId: 2,
    userName: 'Shibu Shit',
    imgUrl:
      'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    userId: 3,
    userName: 'Volvo',
    imgUrl:
      'https://etimg.etb2bimg.com/photo/73142136.cms',
  },
  {
    userId: 4,
    userName: 'Rexyy',
    imgUrl:
      'https://media.istockphoto.com/id/813935794/photo/english-mastiff-portrait.jpg?s=612x612&w=0&k=20&c=oREXWcfhNTJObpopHrP9TZFlE4tuKc0gGnwfEBWRZo8=',
  },
  {
    userId: 5,
    userName: 'Jai Coder',
    imgUrl:
      'https://www.shutterstock.com/image-photo/close-back-rear-behind-photo-260nw-1451794208.jpg',
  },
];

export const CURRENT_USER_STATE = {
  currentUserId: 1,
  currentConversationId: 1,
  searchUserConversationQuery: '',
  tempCurrentConversation: {},
};
