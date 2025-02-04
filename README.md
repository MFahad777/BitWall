# BitWall

`BitWall` This package provides methods to check, add, remove, and retrieve permissions in both raw and human-readable formats.

## Features
- Efficient permission management using bitwise operations.
- Support for adding and removing permissions dynamically.
- Ability to retrieve permissions in human-readable format.
- Lightweight and easy to integrate.

## Installation

You can install the `BitWall` package using npm:

```bash
npm install bitwall
```

or

```bash
yarn add bitwall
```

# Usage

1. Create an instance of BitWall

To use the BitWall class, first, instantiate it with a list of permissions:

```typescript
import { BitWall } from 'bitwall';

const permissionsMap = {
    "VIEW": "VIEW",
    "CREATE": "CREATE",
    "EDIT": "EDIT",
    "DELETE": "DELETE",
    "PUBLISH": "PUBLISH",
    "APPROVE": "APPROVE",
    "REJECT": "REJECT",
    "ARCHIVE": "ARCHIVE",
    "EXPORT": "EXPORT",
    "IMPORT": "IMPORT",
    "DOWNLOAD": "DOWNLOAD",
    "UPLOAD": "UPLOAD",
    "MANAGE_USERS": "MANAGE_USERS",
    "MANAGE_ROLES": "MANAGE_ROLES",
    "MANAGE_SETTINGS": "MANAGE_SETTINGS",
    "VIEW_REPORTS": "VIEW_REPORTS",
    "EDIT_PROFILE": "EDIT_PROFILE",
    "VIEW_PROFILE": "VIEW_PROFILE",
    "CHANGE_PASSWORD": "CHANGE_PASSWORD",
    "ACCESS_DASHBOARD": "ACCESS_DASHBOARD"
};

// Create an instance of BitWall
const bitWall = new BitWall(Object.values(permissionsMap));
```

2. Check if a user has specific permissions

Use the hasPermissions method to check if a user has certain permissions:

```javascript
const userPermission = 1;  // Binary: 0001, meaning "VIEW" permission
const permissionsToCheck = ["VIEW", "CREATE"];

const hasPermissions = bitWall.hasPermissions(userPermission, permissionsToCheck);
console.log(hasPermissions); // Output: true or false
```

3. Add permissions to a user

You can add one or more permissions to a user's existing permission set:

```javascript
let userPermission = 1;  // Binary: 0001 (VIEW permission)
const permissionsToAdd = ["EDIT", "DELETE"];

userPermission = bitWall.addPermission(userPermission, permissionsToAdd);
console.log(userPermission);  // Updated userPermission with "EDIT" and "DELETE" permissions
```

4. Remove permissions from a user

To remove specific permissions, use the removePermission method:

```javascript
let userPermission = 7;  // Binary: 0111 (VIEW, CREATE, EDIT permissions)
const permissionsToRemove = ["CREATE", "EDIT"];

userPermission = bitWall.removePermission(userPermission, permissionsToRemove);
console.log(userPermission);  // Binary: 0001 (only "VIEW" permission)
```

5. Get human-readable permissions

You can retrieve the human-readable permissions a user has by passing their permission bitmask to getHumanReadablePermissions:

```javascript
const userPermission = 7;  // Binary: 0111 (VIEW, CREATE, EDIT permissions)

const readablePermissions = bitWall.getHumanReadablePermissions(userPermission);
console.log(readablePermissions);  // Output: ["VIEW", "CREATE", "EDIT"]
```

6. Get the permissions map

You can access the permission-to-bit mapping using getPermissionsMap():

```javascript
const permissionsMap = bitWall.getPermissionsMap();
console.log(permissionsMap);
// Output: { "VIEW": 1, "CREATE": 2, "EDIT": 4, "DELETE": 8, "PUBLISH": 16, ... }
```

# Methods

## Constructor

### `constructor(permissions: string[])`

- **Parameters**:
    - `permissions`: `string[]` - An array of permission strings.
- **Description**: Initializes the BitWall instance with a list of permissions.

---

### `hasPermissions(userPermission: number, permissionsToCheck: string[]): boolean`

- **Parameters**:
    - `userPermission`: `number` - A number representing the user's current permission bitmask.
    - `permissionsToCheck`: `string[]` - An array of permission strings to check.
- **Description**: Checks if the user has all permissions specified in `permissionsToCheck`.
- **Returns**: `boolean` - `true` if the user has all required permissions, otherwise `false`.

---

### `addPermission(userPermission: number, permissionsToAdd: string[]): number`

- **Parameters**:
    - `userPermission`: `number` - A number representing the user's current permission bitmask.
    - `permissionsToAdd`: `string[]` - An array of permission strings to add.
- **Description**: Adds permissions to the user's current bitmask.
- **Returns**: `number` - The updated permission bitmask after adding the permissions.

---

### `getHumanReadablePermissions(userPermission: number): string[]`

- **Parameters**:
    - `userPermission`: `number` - A number representing the user's current permission bitmask.
- **Description**: Converts the user's bitmask into an array of readable permission strings.
- **Returns**: `string[]` - Array of permission strings the user has.

---

### `removePermission(userPermission: number, permissionsToRemove: string[]): number`

- **Parameters**:
    - `userPermission`: `number` - A number representing the user's current permission bitmask.
    - `permissionsToRemove`: `string[]` - An array of permission strings to remove.
- **Description**: Removes permissions from the user's current bitmask.
- **Returns**: `number` - The updated permission bitmask after removing the permissions.

---

### `getPermissionsMap(): Record<string, number>`

- **Description**: Returns the mapping of permission strings to their corresponding bit values.
- **Returns**: `Record<string, number>` - Object where keys are permission strings and values are their bitmask values.

# Example

```javascript
import { BitWall } from 'bitwall';

// Define permissions
const permissions = ["VIEW", "CREATE", "EDIT", "DELETE", "PUBLISH", "APPROVE", "REJECT"];

// Initialize BitWall instance
const bitWall = new BitWall(permissions);

// Add permissions to a user
let userPermissions = 0; // No permissions initially
userPermissions = bitWall.addPermission(userPermissions, ["VIEW", "CREATE"]);

// Check if the user has "VIEW" and "CREATE" permissions
console.log(bitWall.hasPermissions(userPermissions, ["VIEW", "CREATE"])); // Output: true

// Remove "CREATE" permission
userPermissions = bitWall.removePermission(userPermissions, ["CREATE"]);

// Get human-readable permissions of the user
console.log(bitWall.getHumanReadablePermissions(userPermissions)); // Output: ["VIEW"]
```

# License

This project is licensed under the MIT License.