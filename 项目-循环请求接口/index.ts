/**
 * 场景：在项目开发中，后端的接口参数是单一的，并不能批量接收，比如根据 id 查询用户详细信息
 * 但是有时候我们需要批量查询用户信息，因此我们只能使用循环来查询
 *
 */

// 用户信息类型
type UserInfo = {
  userName: string;
};

// 根据用户 id 查询用户详细信息
const requestUserInfo = (userId: number) => {
  return new Promise<UserInfo>((resolve) => {
    const time = Math.random() * 5 + 1;

    setTimeout(() => {
      resolve({
        userName: `学生-${userId}`,
      });
    }, 1000 * time);
  });
};

/**
 * 返回结果 和 参数顺序保持一致
 * 缺点，只能一个一个的排队执行，并不能并发执行
 *
 */
const getUsersInfo1 = async (ids: number[]): Promise<UserInfo[]> => {
  const usersInfo: UserInfo[] = [];

  for (const id of ids) {
    const userInfo = await requestUserInfo(id);
    usersInfo.push(userInfo);
  }

  return usersInfo;
};
// getUsersInfo1([1, 3, 5, 7]).then((result) => {
//   console.log('结果', result);
// });

/**
 * 返回结果 和 参数顺序保持一致
 * 并发执行
 *
 */
const getUsersInfo2 = (ids: number[]): Promise<UserInfo[]> => {
  const usersInfo: Promise<UserInfo>[] = [];

  for (const id of ids) {
    usersInfo.push(requestUserInfo(id));
  }

  return Promise.all(usersInfo);
};
// getUsersInfo2([2, 4, 6, 8, 10]).then((result) => {
//   console.log('结果', result);
// });

/**
 * 返回结果 和 参数顺序不固定
 * 并发执行
 *
 */
const getUsersInfo3 = (ids: number[]): Promise<UserInfo[]> => {
  const usersInfo: UserInfo[] = [];

  return new Promise((resolve) => {
    for (const id of ids) {
      requestUserInfo(id).then((result) => {
        usersInfo.push(result);

        if (usersInfo.length === ids.length) {
          resolve(usersInfo);
        }
      });
    }
  });
};
// getUsersInfo3([9, 18, 27, 36]).then((result) => {
//   console.log(result);
// });

/**
 * 返回结果 和 参数顺序保持一致
 * 并发执行
 *
 */
const getUsersInfo4 = (ids: number[]): Promise<UserInfo[]> => {
  const usersInfo: UserInfo[] = [];

  return new Promise((resolve) => {
    for (const index in ids) {
      // TODO: 控制台打印和其它 demo 有点不一样
      requestUserInfo(ids[index]).then((result) => {
        usersInfo[index] = result;

        if (usersInfo.length === ids.length) {
          resolve(usersInfo);
        }
      });
    }
  });
};
getUsersInfo4([4, 8, 12, 16]).then((result) => {
  console.log(result);
});

/**
 * 错误案例，新手容易犯的错误，非常经典
 */
const getUsersInfo = (ids: number[]): UserInfo[] => {
  const usersInfo: UserInfo[] = [];

  ids.forEach(async (id) => {
    const res = await requestUserInfo(id);

    usersInfo.push(res);
  });

  return usersInfo;
};
console.log(getUsersInfo([2, 4, 6, 8]));
