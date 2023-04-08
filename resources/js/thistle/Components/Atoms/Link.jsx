import routeTo from "@/app/core/router/routeTo";
import { Link } from "@inertiajs/react";
import { Anchor } from '@mantine/core';

export default props => {
    const { children, ...attributes } = props;

    attributes.onClick = (e) => {
        e.preventDefault();
        routeTo(props.href);
    };

    return (<Anchor  {...attributes}>{children}</Anchor>)
};
