import React, { Component } from 'react';
import { withProps, branch } from 'recompose';


const isDrop= ({link}) => 'dropLinks' in link,
    withProps(( { link: { name, path, dropLinks } }) => ({
        renderLink: () => (
        ),
    }));

const normalLink = withProps(({ link: { name, path } }) => ({
    }));

const dropLink = withProps(({ link: { name, path } }) => ({
    }));

const LinkNode = branch(isDrop, normalLink, dropLink);
