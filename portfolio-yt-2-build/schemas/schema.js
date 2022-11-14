// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import pageInfo from './pageInfo';
import project from './project';
import experience from './experience';
import skill from './skill';
import social from './social';

export default createSchema({
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    pageInfo,
    social,
    experience,
    project,
    skill,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
})
