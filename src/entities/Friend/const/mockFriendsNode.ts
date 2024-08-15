import { IFriendNode } from '@/entities/Friend/types/friend';
import { mockAvatar } from '@/shared/const/mockAvatar';

export const mockFriendsNode: IFriendNode[] = [
  {
    right: {
      right: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username9',
      },
      left: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username10',
      },
      avatar: mockAvatar,
      username: '@username1',
    },
    left: {
      right: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username11',
      },
      left: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username12',
      },
      avatar: mockAvatar,
      username: '@username2',
    },
    avatar: mockAvatar,
    username: '@username',
  },
  {
    right: {
      right: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username13',
      },
      left: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username14',
      },
      avatar: mockAvatar,
      username: '@username3',
    },
    left: {
      right: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username7',
      },
      left: {
        right: null,
        left: null,
        avatar: mockAvatar,
        username: '@username8',
      },
      avatar: mockAvatar,
      username: '@username4',
    },
    avatar: mockAvatar,
    username: '@longusernameusername',
  }
];
