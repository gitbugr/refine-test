import React
    from "react";

import {
    List,
    Table,
    useTable,
    Tag,
    useSelect,
    FilterDropdown,
    Select,
} from "@pankod/refine-antd";

import {
    CrudFilters
} from "@pankod/refine-core";

export const MoviesList: React.FC = () => {
    const {tableProps} = useTable<any>({
        metaData: {
            select: 'id, title, categories(id, title)',
        },
        onSearch: (params: any) => {
            const filters: CrudFilters = [];
            const {categories} = params;

            filters.push(
                {
                    field: "categories.id",
                    operator: "in",
                    value: categories,
                },
            );

            return filters;
        },
    });

    const {selectProps: categorySelectProps} = useSelect<any>({resource: "categories"});

    return (
        <List>
            <Table {...tableProps} rowKey="id">

                <Table.Column
                    dataIndex="title"
                    title="Title"
                />

                <Table.Column
                    dataIndex={'categories'}
                    title="Areas"
                    render={(categories: any[]) => categories.length ?
                        <Tag>{categories.map((category: any) => category.title).join(', ')}</Tag> : <></>}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{minWidth: 200}}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectProps}
                            />
                        </FilterDropdown>
                    )}
                />

            </Table>
        </List>
    );
};