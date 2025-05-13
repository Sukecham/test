import React, { useState } from 'react';

const PaperAnalysisDashboard = () => {
  const [activeTab, setActiveTab] = useState('step1');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'step1':
        return <Step1Content />;
      case 'step2':
        return <Step2Content />;
      case 'step3':
        return <Step3Content />;
      case 'step4':
        return <Step4Content />;
      default:
        return <Step1Content />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <header className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">高カリウム血症の急性治療のための薬理学的介入</h1>
        <p className="text-xl text-gray-600">システマティックレビューとメタ解析の論文解析</p>
      </header>

      <div className="flex flex-wrap mb-6">
        <button
          onClick={() => setActiveTab('step1')}
          className={`px-4 py-2 rounded-t-lg font-medium mr-2 ${
            activeTab === 'step1' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📋 論文種別
        </button>
        <button
          onClick={() => setActiveTab('step2')}
          className={`px-4 py-2 rounded-t-lg font-medium mr-2 ${
            activeTab === 'step2' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📝 論文内容
        </button>
        <button
          onClick={() => setActiveTab('step3')}
          className={`px-4 py-2 rounded-t-lg font-medium mr-2 ${
            activeTab === 'step3' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🔍 批判的吟味
        </button>
        <button
          onClick={() => setActiveTab('step4')}
          className={`px-4 py-2 rounded-t-lg font-medium mr-2 ${
            activeTab === 'step4' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📚 用語集
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

const Step1Content = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">ステップ1: 論文種別の判別</h2>
      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 mb-6">
        <p className="text-xl font-bold">
          論文種別: <span className="text-indigo-700">システマティックレビューおよびメタアナリシス</span>
        </p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <p>
          この論文は、高カリウム血症の急性治療のための薬理学的介入に関する<strong>システマティックレビューおよびメタアナリシス</strong>です。
          論文のタイトル「Pharmacological interventions for the acute treatment of hyperkalaemia: A systematic review and meta-analysis」
          から明確に示されていますが、内容からも以下の特徴が確認できます：
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>体系的な文献検索方法（OVID Medline, EMBASE, COCHRANEデータベースの使用）</li>
          <li>明確な研究選択基準（ランダム化試験、非ランダム化試験、観察研究、動物実験研究）</li>
          <li>複数の研究者による論文スクリーニングとデータ抽出</li>
          <li>GRADE方法論による証拠の確実性評価</li>
          <li>複数の研究結果の統合と定量的解析（メタアナリシス）</li>
          <li>ポタシウムレベルの変化に関する複数の研究のデータ統合</li>
        </ul>
      </div>
    </div>
  );
};

const Step2Content = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">ステップ2: 論文内容の詳細解析</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold text-indigo-500 border-b border-indigo-200 pb-2">I. タイトルと基本情報</h3>
          <div className="ml-4 mt-2">
            <p><strong>論文タイトル:</strong> Pharmacological interventions for the acute treatment of hyperkalaemia: A systematic review and meta-analysis</p>
            <p><strong>著者名:</strong> Marie Kristine Jessen, Lars Wiuff Andersen, Jana Djakow, Ng Kee Chong, Nikola Stankovic, Christian Staehr, Lauge Vammen, Alberthe Hjort Petersen, Cecilie Munch Johannsen, Mark Andreas Eggertsen, Signe Østergaard Mortensen, Maria Høybye, Casper Nørholt, Mathias Johan Holmberg, Asger Granfeldt, for the International Liaison Committee on Resuscitation (ILCOR) Advanced Paediatric Life Support Task Forces</p>
            <p><strong>雑誌名・発行日:</strong> Resuscitation 208 (2025) 110489</p>
            <p><strong>DOI・URL:</strong> https://doi.org/10.1016/j.resuscitation.2025.110489</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-indigo-500 border-b border-indigo-200 pb-2">II. 背景と目的</h3>
          <div className="ml-4 mt-2">
            <h4 className="font-bold">研究背景</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>高カリウム血症は生命を脅かす電解質異常であり、心停止の潜在的原因となる</li>
              <li>通常の成人のカリウム基準値は3.5-5.0 mmol/Lであり、欧州蘇生協議会と米国心臓協会のガイドラインでは、血清カリウム ≥6.5 mmol/Lを重度の高カリウム血症と定義している</li>
              <li>新生児と早産児では、血清カリウム ≥6.0-6.5 mmol/Lが高カリウム血症と定義され、7.0 mmol/L以上が重度の高カリウム血症の閾値として使用されている</li>
              <li>カリウムレベルの上昇は生命を脅かす不整脈を引き起こし、最終的には突然の心臓死につながる可能性がある</li>
              <li>高カリウム血症患者の一般的な管理は、不整脈からの保護（カルシウム）、カリウムの細胞内移行（インスリンとベータ2作動薬）、カリウムの排泄（利尿薬、カリウム結合薬、透析）という3つのメカニズムに基づいている</li>
              <li>心停止患者では、現在のガイドラインではカルシウム、重炭酸塩、インスリンとグルコースの投与が推奨されている</li>
              <li>最近の院外心停止におけるカルシウム投与のルーチン使用が有害であることを示唆するランダム化臨床試験に基づき、高カリウム血症による心停止中のカルシウム使用の臨床的適応について不確実性がある</li>
            </ul>

            <h4 className="font-bold">研究目的</h4>
            <p>心停止の有無にかかわらず、高カリウム血症の治療のための急性薬理学的介入の効果を評価すること</p>
            <p><strong>PICO：</strong></p>
            <ul className="list-disc pl-6">
              <li><strong>P (Population):</strong> あらゆる環境下で高カリウム血症を有する成人（18歳以上）および小児（18歳未満）（心停止の有無を問わない）</li>
              <li><strong>I (Intervention):</strong> 高カリウム血症の有害な影響を緩和するか、カリウムレベルを下げることを目的とした急性薬理学的介入</li>
              <li><strong>C (Comparison):</strong> 介入なし、異なる介入（異なる用量を含む）、またはプラセボ</li>
              <li><strong>O (Outcome):</strong> 臨床的転帰、カリウムレベル、またはECG所見</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-indigo-500 border-b border-indigo-200 pb-2">III. 方法</h3>
          <div className="ml-4 mt-2">
            <h4 className="font-bold">検索戦略</h4>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>使用したデータベース:</strong> OVID Medline、EMBASE、Cochrane Central Register of Controlled Trials</li>
              <li><strong>検索期間:</strong> 2023年6月29日およびその後2024年9月9日に再検索</li>
              <li><strong>検索方法:</strong> プロトコルに記載された各データベースの検索戦略を使用</li>
              <li>進行中の試験の特定のために国際臨床試験レジストリプラットフォーム（https://trialsearch.who.int/）を検索</li>
            </ul>

            <h4 className="font-bold">選定基準</h4>
            <p>以下の研究デザインが含まれる：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>ランダム化試験</li>
              <li>非ランダム化試験</li>
              <li>観察研究（コホート研究、症例対照研究）</li>
              <li>実験的動物研究</li>
              <li>対照群のない原著研究も含む</li>
            </ul>
            <p>除外基準：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>レビュー、抄録のみの研究、未発表の研究</li>
              <li>症例報告と症例シリーズ（一般的に10人未満の非連続的患者と定義）</li>
            </ul>
            <p>高カリウム血症は、個々の研究で定義されるように、通常の基準範囲を超えるカリウムレベルとして定義された。早産児や非常に若い乳児では、含まれた個々の研究で定義されているように定義された。</p>
            <p>急性薬理学的介入は、高カリウム血症が認識された後、比較的迅速に投与され、高カリウム血症の有害な影響を緩和するか、カリウムレベルを迅速に低下させることを目的としたものと定義された（数分から数時間以内）。</p>

            <h4 className="font-bold">データ収集と評価</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>2人の査読者が独立してすべてのタイトルと抄録をスクリーニングし、関連する論文を全文で評価</li>
              <li>2人の査読者が標準化されたデータ抽出フォームを使用して個々の論文からデータを抽出</li>
              <li>少なくとも2人の調査者が含まれた研究のバイアスリスクを独立して評価</li>
              <li>ランダム化試験はCochrane risk-of-bias tool version 2、交差試験はROBINS-I tool、観察研究はROBINS-I tool、動物研究は修正されたSYRCLE's risk of bias toolを使用して評価</li>
            </ul>

            <h4 className="font-bold">統計解析</h4>
            <ul className="list-disc pl-6">
              <li>試験は異質性（薬剤の種類、投与量、患者集団、サンプリング時間など）について評価され、メタ解析で組み合わせ可能かどうかが判断された</li>
              <li>カリウム変化の標準偏差が報告されていない場合、Cochraneハンドブックの推奨に従って相関係数を用いて推定</li>
              <li>メタ解析は逆分散加重による固定効果モデルを使用して実施</li>
              <li>カリウムレベルの変化は平均差と95%信頼区間（95% CI）で報告</li>
              <li>GRADE方法論を使用して、特定の比較に対する全体的なエビデンスの確実性を評価</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-indigo-500 border-b border-indigo-200 pb-2">IV. 結果</h3>
          <div className="ml-4 mt-2">
            <h4 className="font-bold">研究の特徴</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>検索では43,351件の独自の記録が特定され、347件の全文論文が適格性について評価され、101件の論文が含まれた</li>
              <li>研究は1977年から2024年に出版された</li>
              <li>心停止のない患者における研究は、グルコースまたはデキストロース/フルクトースのみの使用、グルコースとの組み合わせたインスリン、ベータ2作動薬、およびそれらの様々な組み合わせ、重炭酸塩、カルシウムなどの使用を調査</li>
              <li>心停止患者を含む研究は2件のみであった</li>
            </ul>

            <h4 className="font-bold">非心停止研究のカリウム変化への効果</h4>
            <p><strong>インスリンとグルコース/デキストロース/フルクトース：</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>グルコース、デキストロース、またはフルクトースのみの使用を調査した3つの研究では、カリウムレベルへの効果は様々</li>
              <li>成人の暴露群で5単位のインスリンを使用した7つの観察研究では、360分以内にカリウムが0.6〜1.2 mmol/L変化</li>
              <li>10単位のインスリンの使用を調査した30の研究では、720分以内にカリウムが0.7〜1.4 mmol/L変化</li>
              <li>高カリウム血症と腎不全を有する成人患者に8〜12単位のインスリンを使用した7つの介入研究（合計66患者）のメタ解析では、30〜60分後にカリウムが0.7 mmol/L（95%CI: 0.9, 0.6）低下</li>
            </ul>

            <p><strong>ベータ2作動薬の吸入：</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>吸入ベータ2作動薬の使用を調査した研究は成人11件、小児1件、新生児3件</li>
              <li>10〜20 mgの吸入サルブタモールを投与した成人の7つの研究（合計87患者）のメタ解析では、120分以内に血清カリウムが0.9 mmol/L（95%CI: 1.2, 0.7）変化</li>
              <li>400 μgのサルブタモールを吸入投与した3つの新生児研究（51患者）を組み合わせたメタ解析では、240分以内にカリウムレベルが0.9 mmol/L（95%CI: 1.2, 0.5）変化</li>
            </ul>

            <p><strong>ベータ2作動薬の静脈内投与：</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>静脈内ベータ2作動薬の使用を調査した研究は成人3件、新生児/小児集団5件</li>
              <li>比較可能と考えられた成人の6つの研究（合計100患者）のメタ解析では、グルコース/デキストロースに溶解した0.5 mgの静脈内サルブタモールを投与すると、120分以内にカリウムレベルが1.0 mmol/L（95%CI: 1.4, 0.6）変化</li>
              <li>4〜5 μg/kgの静脈内サルブタモールを使用した53人の新生児/小児患者の4つの研究を組み合わせたメタ解析では、60分以内にカリウムが1.0 mmol/L（95%CI: 1.5, 0.6）変化</li>
            </ul>

            <p><strong>重炭酸塩：</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>様々な用量の重炭酸塩の使用を調査した成人の5つの研究（合計44患者）が含まれたが、小児/新生児研究はなし</li>
              <li>50〜390 mmolの用量での重炭酸塩の使用は、60分以内にカリウムを0.1 mmol/L（95%CI: 0.3, 0.1）変化させた</li>
            </ul>

            <p><strong>組み合わせとその他の療法：</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>6つの成人研究が、吸入または静脈内ベータ2作動薬とグルコース中のインスリンの併用を調査</li>
              <li>静脈内0.5 mgのサルブタモール、10単位のインスリン、および25 gまたは40 gのグルコースを使用する比較可能な3つの研究（25患者）を組み合わせたメタ解析では、カリウムが1.2 mmol/L（95% CI: 1.5, 0.8）変化</li>
              <li>1）静脈内サルブタモール0.5 mg、2）グルコースと組み合わせた10単位のインスリン、または3）グルコースと組み合わせた静脈内サルブタモールとインスリンの併用を比較した3つの比較可能な介入研究をメタ解析で組み合わせた結果、グルコースに溶解した静脈内サルブタモール単独、またはグルコースに溶解した静脈内サルブタモールと10単位のインスリンの併用が、10単位のインスリン単独と比較してカリウムを低下させる効果が高かった</li>
            </ul>

            <h4 className="font-bold">心停止研究</h4>
            <ul className="list-disc pl-6">
              <li>心停止中の高カリウム血症の治療を調査した2つの観察研究が特定された</li>
              <li>両研究ともカルシウムの使用を調査；1つは成人患者で、もう1つは新生児および小児患者</li>
              <li>Wangらの研究では、カルシウム、重炭酸ナトリウム、またはその両方の投与で自発的循環回復率が低下</li>
              <li>Cashenらの研究では、カルシウムは心停止中に頻繁に使用されており、転帰不良と関連していた</li>
              <li>両研究とも主に交絡と蘇生時間バイアスのリスクにより、高リスクバイアスと評価された</li>
            </ul>

            <h4 className="font-bold">エビデンスの質評価（GRADE）</h4>
            <p>GRADEを使用して評価されたメタ解析に含まれるすべての介入のエビデンスの確実性：</p>
            <ul className="list-disc pl-6">
              <li>成人におけるインスリン治療と新生児における吸入サルブタモールのエビデンスの確実性は「低」</li>
              <li>残りの介入のエビデンスの確実性は「非常に低い」</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-indigo-500 border-b border-indigo-200 pb-2">V. 結論と臨床的意義</h3>
          <div className="ml-4 mt-2">
            <h4 className="font-bold">主な結論</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>非心停止患者に対して、グルコースと併用したインスリン、吸入または静脈内サルブタモール、あるいはそれらの組み合わせ治療を支持するエビデンスがある</li>
              <li>高カリウム血症に対するカルシウムまたは重炭酸塩の臨床効果を支持するエビデンスは特定されなかった</li>
              <li>カリウムレベルの平均低下は一貫して0.7〜1.2 mmol/Lの間であった</li>
              <li>この急性的なカリウム低下が臨床的転帰の改善につながるかどうかは、現在のエビデンスからは不明確</li>
              <li>静脈内サルブタモール単独、または10単位のインスリンと併用する治療は、10単位のインスリン単独と比較してカリウムを低下させる効果が高いことが示された</li>
            </ul>

            <h4 className="font-bold">臨床的意義</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>高カリウム血症の急性薬理学的管理を導く臨床的に関連する患者中心のアウトカムに関するエビデンスは限られている</li>
              <li>カリウムレベルの低下を引き起こすグルコースと併用したインスリン、吸入または静脈内サルブタモール、またはその組み合わせでの治療を支持するエビデンスがある</li>
              <li>高カリウム血症に対する塩化カルシウムまたは重炭酸塩の臨床効果を支持するエビデンスは特定されなかった</li>
              <li>新生児と小児を含む研究数は限られていた</li>
              <li>心停止のない新生児における吸入サルブタモールは、約0.9 mmol/Lのカリウム低下を示した</li>
              <li>同様に、心停止のない小児集団では、静脈内サルブタモールが約1.0 mmol/Lのカリウム低下をもたらした</li>
            </ul>

            <h4 className="font-bold">限界と今後の課題</h4>
            <ul className="list-disc pl-6">
              <li>含まれた研究は多様であり、進化する報告基準とともに長期間にわたって実施された</li>
              <li>メタ解析は慎重に解釈する必要がある</li>
              <li>ECG変化やカリウムレベルへの即時効果を報告する研究が不足している</li>
              <li>高カリウム血症による心停止患者における研究が非常に少ない（2件のみ）</li>
              <li>高カリウム血症による心停止中のカルシウム使用の推奨に対する挑戦があり、特に院外心停止患者におけるルーチンのカルシウム投与が潜在的に有害である可能性がある</li>
              <li>新生児と小児の心停止におけるカルシウム投与の潜在的な害に関する研究がなく、この集団におけるカルシウム使用のエビデンスは限られている</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

const Step3Content = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">ステップ3: 批判的吟味</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold text-indigo-500 border-b border-indigo-200 pb-2">システマティックレビューおよびメタアナリシスとしての批判的吟味</h3>
          
          <div className="ml-4 mt-4 space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700">研究の焦点とPICO</h4>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>研究目的と質問は明確か？</strong> - <span className="text-green-600">✓ 明確</span><br/>
                研究目的は「心停止の有無にかかわらず、高カリウム血症の治療のための急性薬理学的介入の効果を評価すること」と明確に示されている。</li>
                <li><strong>PICOフレームワークは適切に設定されているか？</strong> - <span className="text-green-600">✓ 適切</span><br/>
                対象集団（P）、介入（I）、比較（C）、アウトカム（O）が方法セクションで明確に定義されている。</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700">検索戦略</h4>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>使用したデータベースや検索期間は適切か？</strong> - <span className="text-green-600">✓ 適切</span><br/>
                OVID Medline、EMBASE、COCHRANEという主要な医学データベースを検索しており、2023年と2024年に検索を実施している。</li>
                <li><strong>検索語や戦略が詳細に記載され、再現可能か？</strong> - <span className="text-green-600">✓ 記載あり</span><br/>
                プロトコルに検索戦略が記載されていることが述べられており、追補資料で利用可能であることが示されている。</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700">研究選定の妥当性</h4>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>インクルージョン基準とエクスクルージョン基準は適切か？</strong> - <span className="text-green-600">✓ 適切</span><br/>
                研究デザイン、対象集団、介入の種類、除外される研究タイプなどについて明確な基準が示されている。</li>
                <li><strong>複数のレビュアーが独立して研究選定を行い、偏りを防ぐ手続きがあるか？</strong> - <span className="text-green-600">✓ あり</span><br/>
                2人の査読者が独立してタイトルと抄録をスクリーニングし、関連する論文を全文で評価したと記載されている。不一致がある場合は、必要に応じて第三の調査者との議論によって解決された。</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700">質評価とデータ抽出</h4>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>含まれた研究の質が適切なツールで評価されているか？</strong> - <span className="text-green-600">✓ 評価されている</span><br/>
                ランダム化試験にはCochrane risk-of-bias tool version 2、交差試験と観察研究にはROBINS-I tool、動物研究には修正されたSYRCLE's risk of bias toolを使用して評価されている。</li>
                <li><strong>データ抽出プロセスが詳細に記述され、再現可能か？</strong> - <span className="text-green-600">✓ 記述されている</span><br/>
                2人の査読者が事前に定義された標準化されたデータ抽出フォームを使用して個々の論文からデータを抽出し、抽出されたデータの不一致は議論によって解決されたと記述されている。</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700">結果の統合と異質性</h4>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>メタアナリシスで使用した統計モデルが妥当か？</strong> - <span className="text-green-600">✓ 妥当</span><br/>
                逆分散加重による固定効果モデルを用いたメタアナリシスが実施されている。ただし、ランダム効果モデルを検討しなかった理由については明示されていない。</li>
                <li><strong>異質性が評価され、解釈されているか？</strong> - <span className="text-yellow-600">△ 部分的</span><br/>
                メタアナリシスに含める研究を選択する際に異質性が考慮されているが、I²やCochran's Qなどの具体的な異質性の指標の報告が限られている。</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700">出版バイアス</h4>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>ファンネルプロットや統計的検定で評価されているか？</strong> - <span className="text-red-600">✗ 評価されていない</span><br/>
                出版バイアスの評価についての明確な記述がない。ファンネルプロットやEgger's testなどの統計的検定の結果が報告されていない。</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-700">臨床的意義</h4>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>臨床応用にどの程度有用か？</strong> - <span className="text-green-600">✓ 有用</span><br/>
                高カリウム血症の治療に使用される主要な薬理学的介入の効果について包括的な概要を提供しており、臨床実践に直接適用できる情報を含んでいる。ただし、臨床転帰への影響についてのエビデンスは限られている。</li>
                <li><strong>記載された限界と将来の方向性が妥当か？</strong> - <span className="text-green-600">✓ 妥当</span><br/>
                研究の限界（研究の異質性、報告基準の進化、心停止患者における研究の不足など）が適切に記載されており、将来の研究の必要性が明確に述べられている。</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-indigo-300 mt-6">
              <h4 className="font-bold text-indigo-700">総合評価</h4>
              <p className="mt-2">
                このシステマティックレビューとメタアナリシスは、全体として方法論的に堅固であり、高カリウム血症の急性治療のための薬理学的介入に関する現在のエビデンスを包括的に要約している。強みとしては、明確な研究目的、包括的な検索戦略、適切な研究選定プロセス、詳細なデータ抽出手順、GRADEを用いたエビデンス評価などが挙げられる。
              </p>
              <p className="mt-2">
                主な限界としては、出版バイアスの明示的な評価の欠如、臨床転帰への影響に関するエビデンスの限定、心停止患者における研究の不足などがある。また、メタアナリシスにおける固定効果モデルの選択理由や異質性の詳細な報告が限られている点も改善の余地がある。
              </p>
              <p className="mt-2">
                総じて、臨床医にとって高カリウム血症の治療、特にインスリンとグルコースの併用、吸入または静脈内ベータ2作動薬の使用に関する情報を提供する価値のあるレビューと言える。ただし、心停止の状況での治療や、カルシウムや重炭酸塩の効果に関しては、より質の高いエビデンスが必要である。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const Step4Content = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">ステップ4: 専門用語集</h2>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用語</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">説明</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">高カリウム血症<br/>(Hyperkalaemia)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                血液中のカリウム濃度が異常に高い状態。通常、成人では血清カリウム値が5.0 mmol/Lを超える場合に診断される。重度の高カリウム血症（≥6.5 mmol/L）は生命を脅かす可能性があり、心臓不整脈や心停止を引き起こす可能性がある。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">システマティックレビュー<br/>(Systematic review)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                特定の研究課題に関連するすべての利用可能な文献を体系的かつ包括的に特定、評価、統合する研究方法。明確な研究質問、包括的な検索戦略、明示的な選択基準、質の評価、データの統合などが特徴。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">メタアナリシス<br/>(Meta-analysis)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                複数の独立した研究結果を統計的手法を用いて統合し、全体的な効果推定値を算出する分析手法。効果量の推定精度を高め、研究間の不一致を解決し、サンプルサイズを増やすことで統計的検出力を向上させることができる。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GRADE<br/>(Grading of Recommendations Assessment, Development and Evaluation)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                エビデンスの質と推奨の強さを評価するための体系的アプローチ。エビデンスの質を「高」「中等度」「低」「非常に低い」の4段階で評価し、ランダム化試験から始まり、バイアスリスク、一貫性の欠如、間接性、不精確さ、出版バイアスなどの要因によって格下げされることがある。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">バイアスリスク<br/>(Risk of bias)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                研究の計画、実施、分析、報告の方法が結果を系統的に偏らせる可能性の程度。ランダム化の方法、割り付けの隠蔽、盲検化、不完全なアウトカムデータ、選択的報告などの側面が評価される。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">固定効果モデル<br/>(Fixed-effect model)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                メタアナリシスで使用される統計モデルの一つで、すべての研究が同じ真の効果を推定していると仮定し、研究間の変動はサンプリング誤差のみによるものと考える。研究間の異質性が低い場合に適している。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ランダム効果モデル<br/>(Random-effects model)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                メタアナリシスで使用される統計モデルの一つで、研究間で真の効果が異なる可能性を認め、研究間の異質性を考慮する。研究間の異質性が高い場合に適しており、より保守的な信頼区間を提供する傾向がある。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">異質性<br/>(Heterogeneity)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                メタアナリシスに含まれる研究間の変動性や違いの程度。I²統計量（0%から100%）やCochran's Q検定などで評価され、研究デザイン、対象集団、介入、アウトカム測定などの違いに起因する可能性がある。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">出版バイアス<br/>(Publication bias)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                研究結果の統計的有意性や方向性によって研究が出版される可能性が異なることによるバイアス。一般的に、肯定的または有意な結果を持つ研究の方が出版される可能性が高い。ファンネルプロットやEgger's検定などで評価される。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">サルブタモール/アルブテロール<br/>(Salbutamol/Albuterol)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                短時間作用型ベータ2アドレナリン受容体作動薬（ベータ2作動薬）。主に気管支拡張薬として喘息や慢性閉塞性肺疾患（COPD）の治療に使用されるが、ベータ2受容体を刺激してカリウムを細胞内に移動させる作用もあり、高カリウム血症の治療にも使用される。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">重炭酸塩/炭酸水素ナトリウム<br/>(Bicarbonate/Sodium bicarbonate)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                血液のpHを上昇させるアルカリ化剤。重度の代謝性アシドーシスの治療に使用される。高カリウム血症の治療においては、細胞内外のpH変化を通じてカリウムの細胞内移行を促進する可能性があるとされるが、効果に関するエビデンスは限られている。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">カルシウム（塩化カルシウム/グルコン酸カルシウム）<br/>(Calcium chloride/calcium gluconate)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                高カリウム血症の治療に使用されるカルシウム塩。カリウムの心臓への影響を一時的に拮抗することで心臓を保護する目的で使用されるが、カリウムレベル自体は低下させない。塩化カルシウムはグルコン酸カルシウムよりも約3倍のイオン化カルシウムを提供する。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">蘇生時間バイアス<br/>(Resuscitation time bias)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                心停止研究において生じうるバイアスの一種。蘇生時間が長くなるほど、より多くの介入が行われる可能性があり、蘇生時間が長い患者（予後が悪い傾向がある）ほど特定の介入を受ける可能性が高くなるため、介入と転帰の関連が歪められる可能性がある。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">自発的循環回復<br/>(Return of Spontaneous Circulation, ROSC)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                心停止後に自発的な心拍と血圧が回復すること。通常、触知可能な脈拍の出現や動脈圧波形の回復によって確認される。心肺蘇生の重要なアウトカム指標の一つ。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">95%信頼区間<br/>(95% Confidence Interval, 95% CI)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                統計学的推定において、真の値が95%の確率で含まれると考えられる値の範囲。効果推定値の精度と不確実性を示し、区間が広いほど推定の不確実性が高いことを示す。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PRISMA<br/>(Preferred Reporting Items for Systematic Reviews and Meta-Analyses)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                システマティックレビューとメタアナリシスの報告の質を向上させるために開発された国際的なガイドライン。検索戦略、研究選定プロセス、データ抽出、結果の提示などに関する詳細な報告基準を提供している。
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PICO<br/>(Population, Intervention, Comparison, Outcome)</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                臨床的疑問を構造化するためのフレームワーク。対象集団（P）、介入（I）、比較対照（C）、アウトカム（O）の要素を明確に定義することで、エビデンスに基づく医療における疑問の明確化と検索戦略の最適化を支援する。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaperAnalysisDashboard;
