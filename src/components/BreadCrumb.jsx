import React from 'react'

const BreadCrumb = ({ router1, router2, router3 }) => {
    return (
        <div class="breadcrumbs text-sm">
            <ul>
                <li><a>{router1}</a></li>
                <li><a>{router2}</a></li>
                <li className='text-opacity-45 text-primary link-primary'>{router3}</li>
            </ul>
        </div>
    )
}

export default BreadCrumb