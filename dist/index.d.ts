export declare class BitWall {
    private permissionsMap;
    constructor(permissions: string[]);
    private constructPermissionsMap;
    hasPermissions(userPermission: number, permissionsToCheck: string[]): boolean;
    addPermission(userPermission: number, permissionsToAdd: string[]): number;
    getHumanReadablePermissions(userPermission: number): string[];
    removePermission(userPermission: number, permissionsToRemove: string[]): number;
    getPermissionsMap(): Record<string, number>;
}
