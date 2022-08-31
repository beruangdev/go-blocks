import { registerBlockType } from '@wordpress/blocks'
import { withSelect } from '@wordpress/data'

import json from './block.json'
import Edit from './edit/edit.jsx'

const { name } = json
import Icon from './icon'

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(name, {
  icon: Icon,
  edit: withSelect((select, ownProps) => {
    const { getBlock, getClientIdsWithDescendants } =
      select('core/block-editor') || select('core/editor')

    return {
      block: getBlock(ownProps.clientId),
      getBlock,
      getClientIdsWithDescendants,
    }
  })(Edit),
})
