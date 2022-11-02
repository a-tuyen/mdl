import '../styles/Sheetlead.scss'
// import '../styles/ProductsWithChart.scss'

const SheetLead = () => {
    return (
        <div className='sheet-lead'>
            <h1>Sheet Lead</h1>
            <h3>COMMONLY USED FOR RADIATION SHIELDING AND SOUND PROOFING</h3>
            <p>Manufactured from refined pure leads that conforms to ASTM B-29, B-749 and Federal QQ-L-201F, QQ-L-171E specifications for lead.</p>
            <p>Our sheet lead is produced in-house by our skilled technicians on one of the most precise Lead Rolling Mills in the world today. Thickness can range from just 1/64" to 1" in thickness. We stock standard sizes of sheet lead such as 34" x 84" and 36" x 96" and are able to produce custom sizes upon request.</p>
            <table className='table-sheet-lead'>
                <tr>
                    <th className='main-header' colSpan={'5'}>SHEET LEAD THICKNESS CHART</th>
                </tr>
                <tr>
                    <th>INCHES (DECIMAL)</th>
                    <th>INCHES (FRACTION)</th>
                    <th>METRIC (mm)</th>
                    <th>APPROX LBS/FT²</th>
                    <th>APPROX KG/M²</th>
                </tr>
                <tr>
                    <td>0.0156"</td>
                    <td>1/64"</td>
                    <td>0.4mm</td>
                    <td>​​1#</td>
                    <td>4.88</td>
                </tr>
                <tr>
                    <td>0.0312"</td>
                    <td>1/32"</td>
                    <td>0.8mm</td>
                    <td>2#</td>
                    <td>9.76</td>
                </tr>
                <tr>
                    <td>0.0391"</td>
                    <td>5/128"</td>
                    <td>1.0mm</td>
                    <td>2½#</td>
                    <td>12.2</td>
                </tr>
                <tr>
                    <td>0.0468"</td>
                    <td>3/64"</td>
                    <td>1.2mm</td>
                    <td>3#</td>
                    <td>14.64</td>
                </tr>
                <tr>
                    <td>0.0625"</td>
                    <td>1/16"</td>
                    <td>1.6mm</td>
                    <td>4#</td>
                    <td>19.52</td>
                </tr>
                <tr>
                    <td>0.0781"</td>
                    <td>5/64"</td>
                    <td>2.0mm</td>
                    <td>5#</td>
                    <td>24.4</td>
                </tr>
                <tr>
                    <td>0.0937"</td>
                    <td>3/32"</td>
                    <td>2.4mm</td>
                    <td>6#</td>
                    <td>29.28</td>
                </tr>
                <tr>
                    <td>0.125"</td>
                    <td>1/8"</td>
                    <td>3.2mm</td>
                    <td>8#</td>
                    <td>39.04</td>
                </tr>
                <tr>
                    <td>0.1563"</td>
                    <td>5/32"</td>
                    <td>4.0mm</td>
                    <td>10#</td>
                    <td>48.8</td>
                </tr>
                <tr>
                    <td>0.1875"</td>
                    <td>3/16"</td>
                    <td>4.8mm</td>
                    <td>12#</td>
                    <td>58.56</td>
                </tr>
                <tr>
                    <td>0.2188"</td>
                    <td>7/32"</td>
                    <td>5.6mm</td>
                    <td>14#</td>
                    <td>68.32</td>
                </tr>
                <tr>
                    <td>0.25"</td>
                    <td>1/4"</td>
                    <td>6.4mm</td>
                    <td>16#</td>
                    <td>78.08</td>
                </tr>
                <tr>
                    <td>0.375"</td>
                    <td>3/8"</td>
                    <td>9.5mm</td>
                    <td> 22 ½#</td>
                    <td>109.8</td>
                </tr>
                <tr>
                    <td>0.50"</td>
                    <td>1/2"</td>
                    <td>12.7mm</td>
                    <td>30#</td>
                    <td>146.4</td>
                </tr>
                <tr>
                    <td>0.75"</td>
                    <td>3/4"</td>
                    <td>19.1mm</td>
                    <td>45#</td>
                    <td>219.6</td>
                </tr>
                <tr>
                    <td>1"</td>
                    <td>1"</td>
                    <td>25.4mm</td>
                    <td>60#</td>
                    <td>292.8</td>
                </tr>

            </table>
        </div>
    );
};

export default SheetLead;