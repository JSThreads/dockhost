# User API

***Permission needed***: users

## Description

User API enables to manage users to manage containers by the way. It can be used to create containers rules with a hole access infrastructure.

## Docs

### List users

| **Path** | **Description** | **Headers** |
| - | - | - |
| /api/users/list | List all the users | *x-token*: User token |

### Add user

| **Path** | **Description** | **Headers** |
| - | - | - |
| /api/users/add | Add a user | *x-token*: User token <br> *x-username*: Username of the new user <br> *x-password*: Hashed password of the new user <br> x-permission-users: Permission to manage users <br> x-permission-pages: Permission to manage pages <br> x-permission-containers: Permission to manage containers |

### Remove user

| **Path** | **Description** | **Headers** |
| - | - | - |
| /api/users/remove | Remove a user | *x-token*: User token <br> *x-username*: Username of the user to remove |

### Update user

| **Path** | **Description** | **Headers** |
| - | - | - |
| /api/users/update/*&#60;username>* | Update a user | *x-token*: User token <br> *x-new-username*: New username <br> *x-new-password*: New hashed password <br>  x-permission-users: Permission to manage users <br> x-permission-pages: Permission to manage pages <br> x-permission-containers: Permission to manage containers  |