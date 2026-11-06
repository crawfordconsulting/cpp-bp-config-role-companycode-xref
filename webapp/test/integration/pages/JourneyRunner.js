sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"cppbpcfgrolecocdxref/test/integration/pages/BpConfigureRoleAllList.gen",
	"cppbpcfgrolecocdxref/test/integration/pages/BpConfigureRoleAllObjectPage.gen",
	"cppbpcfgrolecocdxref/test/integration/pages/BpConfigureRoleObjectPage.gen"
], function (JourneyRunner, BpConfigureRoleAllListGenerated, BpConfigureRoleAllObjectPageGenerated, BpConfigureRoleObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('cppbpcfgrolecocdxref') + '/test/flp.html#app-preview',
        pages: {
			onTheBpConfigureRoleAllListGenerated: BpConfigureRoleAllListGenerated,
			onTheBpConfigureRoleAllObjectPageGenerated: BpConfigureRoleAllObjectPageGenerated,
			onTheBpConfigureRoleObjectPageGenerated: BpConfigureRoleObjectPageGenerated
        },
        async: true
    });

    return runner;
});

