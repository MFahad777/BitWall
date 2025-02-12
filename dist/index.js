"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitWall = void 0;
class BitWall {
    constructor(permissions) {
        this.permissionsMap = {};
        this.constructPermissionsMap(permissions);
    }
    constructPermissionsMap(permissions) {
        permissions.flatMap(data => data).forEach((perm, index) => {
            this.permissionsMap[perm] = 1 << index;
        });
    }
    hasPermissions(userPermission, permissionsToCheck) {
        return permissionsToCheck.every((perm) => (userPermission & (this.permissionsMap[perm] || 0)) !== 0);
    }
    addPermission(userPermission, permissionsToAdd) {
        permissionsToAdd.forEach((perm) => {
            if (this.permissionsMap[perm] !== undefined) {
                userPermission |= this.permissionsMap[perm];
            }
        });
        return userPermission;
    }
    getHumanReadablePermissions(userPermission) {
        return Object.keys(this.permissionsMap).filter(perm => (userPermission & this.permissionsMap[perm]) !== 0);
    }
    removePermission(userPermission, permissionsToRemove) {
        permissionsToRemove.forEach((perm) => {
            if (this.permissionsMap[perm] !== undefined) {
                userPermission &= ~this.permissionsMap[perm];
            }
        });
        return userPermission;
    }
    getPermissionsMap() {
        return this.permissionsMap;
    }
}
exports.BitWall = BitWall;
