export function urlBase () {
  return `/api/groups/`
}

export function urlGroupList () {
  return `${urlBase()}group/`
}

export function urlActiveGroupPost () {
  return `${urlBase()}post/`
}

export function urlActiveGroupPostSpecific (id) {
  return `${urlActiveGroupPost()}${id}/`
}

export function urlActiveGroupContactInfo (id) {
  return `${urlBase()}contact_information/${id}/`
}

export function urlActiveGroupLocationtInfo (id) {
  return `${urlBase()}location_information/${id}/`
}

export function urlActiveGroupSocialInfo () {
  return `${urlBase()}social_link/`
}

export function urlActiveGroupSocialInfoSpecific (id) {
  return `${urlActiveGroupSocialInfo()}${id}/`
}

export function urlGroupMembership () {
  return `${urlBase()}membership/`
}

export function urlGroupMembershipSpecific (id) {
  return `${urlGroupMembership()}${id}/`
}

export function urlGroupDescription (slug) {
  return `${urlGroupList()}${slug}/`
}

export function urlHasRights () {
  return `${urlBase()}rights/`
}

export function urlSearchPerson () {
  return `/api/yellow_pages/person/`
}
