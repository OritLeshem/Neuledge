import { $ } from '@neuledge/engine';
/**
 * This is the category state.
 */
export declare class Playlist {
    static $name: "Playlist";
    static $id: {
        readonly fields: readonly ["+id"];
        readonly auto: "increment";
    };
    static $scalars: () => {
        id: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                after: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                below: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
            }, number, number, number, "number">;
            index: number;
        };
        name: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                trim: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                lowercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                uppercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                normalize: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                startsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                endsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                regex: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
            }, string, string, string, "string" | "enum">;
            index: number;
        };
        imgUrl: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                domain: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                protocol: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                secure: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
            }, string, string, string, "string" | "enum">;
            index: number;
        };
        tags: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                trim: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                lowercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                uppercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                normalize: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                startsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                endsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                regex: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
            }, string, string, string, "string" | "enum">[];
            index: number;
        };
        createdBy: {
            type: (typeof User)[];
            index: number;
        };
    };
    static $where: {
        id?: $.WhereNumber<$.scalars.Integer> | null;
    };
    static $unique: {
        id: $.scalars.Integer;
    };
    static $filter: {
        id?: $.WhereNumber<$.scalars.Integer> | null;
        name?: $.WhereString<$.scalars.String> | null;
        imgUrl?: $.WhereString<$.scalars.URL> | null;
        tags?: $.WhereArray<$.scalars.String> | null;
        createdBy?: $.WhereState<typeof User> | null;
    };
    static $relations: () => {
        createdBy: {
            readonly states: readonly [typeof User];
        };
        songs: {
            readonly states: readonly [typeof Song];
            readonly list: true;
            readonly reference: "playlist";
        };
    };
    id: $.scalars.Integer;
    name: $.scalars.String;
    imgUrl: $.scalars.URL;
    tags: $.scalars.String[];
    createdBy: $.Id<typeof User>;
}
export type $Playlist = $.Entity<typeof Playlist>;
export declare class Song {
    static $name: "Song";
    static $id: {
        readonly fields: readonly ["+id"];
        readonly auto: "increment";
    };
    static $scalars: () => {
        id: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                after: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                below: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
            }, number, number, number, "number">;
            index: number;
        };
        title: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                trim: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                lowercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                uppercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                normalize: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                startsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                endsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                regex: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
            }, string, string, string, "string" | "enum">;
            index: number;
        };
        imgUrl: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                domain: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                protocol: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                secure: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
            }, string, string, string, "string" | "enum">;
            index: number;
        };
        artist: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                trim: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                lowercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                uppercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                normalize: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                startsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                endsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                regex: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
            }, string, string, string, "string" | "enum">;
            index: number;
        };
        playlist: {
            type: (typeof Playlist)[];
            index: number;
        };
    };
    static $where: {
        id?: $.WhereNumber<$.scalars.Integer> | null;
    };
    static $unique: {
        id: $.scalars.Integer;
    };
    static $filter: {
        id?: $.WhereNumber<$.scalars.Integer> | null;
        title?: $.WhereString<$.scalars.String> | null;
        imgUrl?: $.WhereString<$.scalars.URL> | null;
        artist?: $.WhereString<$.scalars.String> | null;
        playlist?: $.WhereState<typeof Playlist> | null;
    };
    static $relations: () => {
        playlist: {
            readonly states: readonly [typeof Playlist];
        };
    };
    id: $.scalars.Integer;
    title: $.scalars.String;
    imgUrl: $.scalars.URL;
    artist: $.scalars.String;
    playlist: $.Id<typeof Playlist>;
}
export type $Song = $.Entity<typeof Song>;
export declare class User {
    static $name: "User";
    static $id: {
        readonly fields: readonly ["+id"];
        readonly auto: "increment";
    };
    static $scalars: () => {
        id: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                after: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                below: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
            }, number, number, number, "number">;
            index: number;
        };
        username: {
            type: import("@neuledge/scalars/dist").CallableScalar<{
                min: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                max: {
                    type: import("@neuledge/scalars/dist").Scalar<number, number, number, "number">;
                    nullable: true;
                };
                trim: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                lowercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                uppercase: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                normalize: {
                    type: import("@neuledge/scalars/dist").Scalar<boolean, boolean | 0 | 1 | "true" | "yes" | "True" | "Yes" | "TRUE" | "YES" | "false" | "no" | "False" | "No" | "FALSE" | "NO", boolean, "boolean">;
                    nullable: true;
                };
                startsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                endsWith: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
                regex: {
                    type: import("@neuledge/scalars/dist").Scalar<string, string, string, "string" | "enum">;
                    nullable: true;
                };
            }, string, string, string, "string" | "enum">;
            index: number;
        };
    };
    static $where: {
        username?: $.WhereString<$.scalars.String> | null;
    } | {
        id?: $.WhereNumber<$.scalars.Integer> | null;
    };
    static $unique: {
        username: $.scalars.String;
    } | {
        id: $.scalars.Integer;
    };
    static $filter: {
        id?: $.WhereNumber<$.scalars.Integer> | null;
        username?: $.WhereString<$.scalars.String> | null;
    };
    static $indexes: {
        username: {
            readonly fields: readonly ["+username"];
            readonly unique: true;
        };
    };
    id: $.scalars.Integer;
    username: $.scalars.String;
}
export type $User = $.Entity<typeof User>;
//# sourceMappingURL=states.codegen.d.ts.map