import React, {} from 'react'

export default function Pagination({ cardPerPage, totalCards, paginate, currentPage }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardPerPage ); i++){
        pageNumbers.push(i);
    }
    return (
        <div className="pagpos">
            <ul>
                {pageNumbers && pageNumbers.map(p => 
                p === currentPage ? <li><button  className="current" onClick={() => paginate(p)}>{p}</button></li> : <li><button className="pag" onClick={() => paginate(p)}>{p}</button></li>)}
            </ul>
        </div>
    )
}
