fixture('Login Flows')
  .page('https://digital.uat.greatminds.dev/')

test('Login to Habitat', async t => {
  await t.navigateTo('/')
    .click('');
});

test('Login to CMS', async t => {
  await t.navigateTo('/habitat/cms/admin/auth/login')
});

test('Login to Manage', async t => {
  await t.navigateTo('/')
});
