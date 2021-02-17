import { SourceListMap } from '@umijs/deps/types/webpack-dev-middleware/source-list-map';
import { SourceNode } from '@umijs/deps/types/webpack-dev-middleware/source-map';

import { MapOptions, SourceAndMapMixin } from '.';
import Source = require('./Source');

/**
 * Concatenate multiple Sources or strings to a single source.
 */
declare class ConcatSource extends Source implements SourceAndMapMixin {
    children: Array<string | Source>;

    constructor(...args: Array<string | Source>);

    /**
     * Adds an item to the source.
     */
    add(item: string | Source): void;
    source(): string;
}

export = ConcatSource;
