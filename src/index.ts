export class BitWall {
    private permissionsMap: Record<string, number> = {};

    constructor(permissions: string[]) {
        this.constructPermissionsMap(permissions);
    }

    private constructPermissionsMap(permissions: string[]): void {
        permissions.flatMap(data => data).forEach((perm, index) => {
            this.permissionsMap[perm] = 1 << index;
        });
    }

    hasPermissions(userPermission: number, permissionsToCheck: string[]): boolean {
        return permissionsToCheck.every((perm) =>
            (userPermission & (this.permissionsMap[perm] || 0)) !== 0
        );
    }

    addPermission(userPermission: number, permissionsToAdd: string[]): number {
        permissionsToAdd.forEach((perm) => {
            if (this.permissionsMap[perm] !== undefined) {
                userPermission |= this.permissionsMap[perm];
            }
        });
        return userPermission;
    }

    getHumanReadablePermissions(userPermission: number): string[] {
        return Object.keys(this.permissionsMap).filter(perm =>
            (userPermission & this.permissionsMap[perm]) !== 0
        );
    }

    removePermission(userPermission: number, permissionsToRemove: string[]): number {
        permissionsToRemove.forEach((perm) => {
            if (this.permissionsMap[perm] !== undefined) {
                userPermission &= ~this.permissionsMap[perm];
            }
        });
        return userPermission;
    }

    getPermissionsMap(): Record<string, number> {
        return this.permissionsMap;
    }
}