import { $ } from '@neuledge/engine';
/**
 * This is the category state.
 */
export declare class Category {
    static $name: "Category";
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
    };
    /**
     * The category id
     */
    id: $.scalars.Integer;
    /**
     * The category name
     */
    name: $.scalars.String;
}
export type $Category = $.Entity<typeof Category>;
//# sourceMappingURL=states.codegen.d.ts.map